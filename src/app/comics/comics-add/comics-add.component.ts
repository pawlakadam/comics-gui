import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {map, tap} from 'rxjs/operators';
import {IComics} from '../comics.model.component';

@Component({
  selector: 'app-comics-add',
  templateUrl: './comics-add.component.html',
  styleUrls: ['./comics-add.component.css']
})
export class ComicsAddComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
  }

  comicsAddForm: FormGroup;

  allComics: IComics[];

  ngOnInit(): void {
    // this.getComics();

    this.comicsAddForm = this.formBuilder.group({
      title: [null, Validators.required],
      publisher: [null, Validators.required],
      file: ['', [Validators.required]]
    });
  }

  get comicsForm(): any {
    return this.comicsAddForm.controls;
  }

  onFileChange(event: any): any {
    console.log('Hanysz');
    if (event.target.files.length > 0) {
      console.log('Powinno być ok');
      const file = event.target.files[0];
      console.log('tu: ' + file);
      const formData: FormData = new FormData();
      // formData.append('fileKey', fileSource);
      formData.append('nazwa', 'nazwa');
      formData.append('file', file);
      console.log('formData: ' + formData);
      console.log(formData.get('file'));
      this.comicsAddForm.patchValue({
        fileSource: file
      });
    }
  }

  addComics(): void {
    const newTitle = this.comicsAddForm.value.title;
    const newPublisher = this.comicsAddForm.value.publisher;
    const fileSource = this.comicsAddForm.value.fileSource;
    const file = this.comicsAddForm.value.file;
    console.log('source: ' + JSON.stringify(fileSource));
    const comics: IComics = {title: newTitle, publisher: newPublisher, number: '2', fileContent: fileSource};
    console.log(comics);
    const formData: FormData = new FormData();
    // formData.append('fileKey', fileSource);
    formData.append('file', fileSource);
    // formData.append('file', file);
    console.log('formData: ' + formData.get('file'));
    console.log('publisher: ' + newPublisher);
    // this.http.post('https://comics-3eb67-default-rtdb.firebaseio.com/comics.json', formData)
    //   .subscribe(responseDtata => {
    //     console.log(responseDtata);
    //   });

    this.http.post('http://localhost:8010/addImage', formData)
      .subscribe(responseDtata => {
        console.log(responseDtata);
      });
  }

  fetchComics(): void {
    this.getComics();
  }

  private getComics(): void {
    this.http.get<{ [key: string]: IComics }>('https://comics-3eb67-default-rtdb.firebaseio.com/comics.json',
      {observe: 'body',
      responseType: 'json'})
      .pipe(
        tap(event => {
          // if (event.type === HttpEventType.Sent) {
            console.log(event);
          // }
        }),
        map(responseData => {
          // const postsArray = [];
          const comices: IComics[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              // @ts-ignore
              const {image: image, description: description, title: title1} = responseData[key];
              comices.push({id: key, title: title1, publisher: description, number: '2', fileContent: image});
              // console.log('A tu: ' + description + ' dla key: ' + key);
              // @ts-ignore
              // postsArray.push({...responseData[key], id: key});
            }
          }
          return comices;
        }
        )
      )
      .subscribe((comics: IComics[]) => console.log('Wow: ' + JSON.stringify(comics)));
      // .subscribe(
      // //   (comics: Comics[]) => {
      // //   this.allComics = comics;
      // //   console.log(this.allComics);
      // // }
      // );
  }
}
