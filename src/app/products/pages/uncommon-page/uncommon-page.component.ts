import { Component } from '@angular/core';
import { interval, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
})

export class UncommonPageComponent {

  //i18nSelect
  public name:string = 'Fernando';
  public gender: 'male'|'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female':'invitarla'
  }

  changeClient(){
    this.name = 'Melisa'
    this.gender = 'female'
  }

  //i18nPlural

  public clients: string[] = ['Maria','Pedro','Fernando','Hernando','Eduardo','Melissa','Natalia']
  public clientsMap = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2  personas esperando',
    'other': 'tenemos  # clientes esperando'
  }

  deleteClient(){
    this.clients.pop()
  }

  //KeyValue Pipe

  public person = {
    name:'Fernando',
    age:36,
    address: 'Ottawa, Canada'
  }


  //Async Pipe

  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap(value => console.log('tap', value))
  )

  public promiseValue: Promise<string>= new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa')
    }, 3500);
  })
}
