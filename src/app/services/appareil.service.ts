import { Subject } from 'rxjs/Subject';

export class AppareilService {

    appareilsSubject = new Subject<any[]>();

    private appareils = [
        {
          name: 'Machine à laver',
          status: 'allumé',
          id: 1
        },
        {
          name: 'Ordinateur',
          status: 'éteint',
          id: 2
        },
        {
          name: 'Télévision',
          status: 'éteint',
          id: 3
        }
      ];

    getAppareilById(id: number) {
      const appareil = this.appareils.find(
        (appareilObject) => {
          return appareilObject.id === id;
        }
      );
      return appareil;
    }

    emitAppareilSubject() {
      this.appareilsSubject.next(this.appareils.slice());
    }

    switchOnAll() {
        for (const appareil of this.appareils) {
            appareil.status = 'allumé';
        }
        this.emitAppareilSubject();
    }

    switchOffAll() {
        for (const appareil of this.appareils) {
            appareil.status = 'éteint';
        }
        this.emitAppareilSubject();

    }

    switchOnOne(index: number) {
        this.appareils[index].status = 'allumé';
        this.emitAppareilSubject();
    }

switchOffOne(index: number) {
      this.appareils[index].status = 'éteint';
      this.emitAppareilSubject();
  }

}





