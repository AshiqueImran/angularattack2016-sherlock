import {Injectable} from '@angular/core';
// import {Language} from '../language';

@Injectable()
export class UserDataService{

  //return an array of languages used in repo
  getLanguageArray(data:any){
      var langArr = [];
      for (var i = 0; i < data.length; i++) {
          langArr.push(data[i].language);
      }
      return langArr;
  }

  //get unique language used in an array
  getUniqueLanguages(langArr:any){
    var a = [];
    var prev;
    langArr.sort();

    for (var i = 0; i < langArr.length; i++) {
        if (langArr[i] !== prev) {
            a.push(langArr[i]);
        }
        prev = langArr[i];
    }
    return a;
  }

  //get [{language:number_of_use}]
  /*
  getLanguageUse(langArr,unique):Language[]{
    var newArr:Language[];

    unique.map(function(currentValue,index,array){
      var check=currentValue;
      var counter=0;
      for(var i=0;i < langArr.length;i++){
        if(check==langArr[i]){
          counter++;
        }
      }
      newArr.push({name:check,use:counter});
    });
    console.log(newArr);
    return newArr;
  }
  */
}
