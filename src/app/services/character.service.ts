import { Injectable } from '@angular/core';

@Injectable()
export class CharacterService {

    private Mangas: Manga[]=[
        {
          nombre: "Chainsawman",
          bio: "Broke young man + chainsaw dog demon = Chainsaw Man!The name says it all! Denji's life of poverty is changed forever when he merges with his pet chainsaw dog, Pochita! Now he's living in the big city and an official Devil Hunter. But he's got a lot to learn about his new job and chainsaw powers!",
          img: "assets/img/chainsawman.jpg",
          aparicion: "2018-12-03",
          casa:"JUMP"
        },
        {
          nombre: "Bokutachi wa Benkyou ga Dekinai",
          bio: "Yuiga Nariyuki wasn't always a top-notch student; he had to study intensively to get where he is. Even so, he is constantly outperformed by literary genius Furuhashi and science whiz Ogata. When he's supposed to be preparing for college entrance exams, Yuiga is ordered by the headmaster to tutor both these girls—in the subjects with which they struggle the most! How will he manage to get results out of these geniuses?",
          img: "assets/img/rizu.jpg",
          aparicion: "2017-03-06",
          casa:"JUMP"
        },
        {
          nombre: "SPYxFamily",
          bio: "The master spy codenamed <Twilight> has spent his days on undercover missions, all for the dream of a better world. But one day, he receives a particularly difficult new order from command. For his mission, he must form a temporary family and start a new life?! A Spy/Action/Comedy about a one-of-a-kind family!",
          img: "assets/img/SpyFamily.jpg",
          aparicion: "2019-03-25",
          casa: "JUMP"
        },
        {
          nombre: "Kanojo, Okarishimasu",
          bio: "Kinoshita Kazuya is a regular college student who was just dumped by his girlfriend for another guy. Feeling down in the dumps, he decides to use an app called Diamond to hire Mizuhara Chizuru, a rental girlfriend, to make himself feel better. From their first meeting, she seems to be the perfect girl for him, but is there more to her than meets the eye? And how will their not quite typical relationship develop?",
          img: "assets/img/KanokariRuka.jpg",
          aparicion: "2017-07-12",
          casa: "Weekly Shōnen Magazine"
        },
        {
          nombre: "Komi-san wa Komyushou Desu",
          bio: "Komi-san is a beautiful and admirable girl that no one can take their eyes off of. Almost the whole school sees her as the cold beauty that's out of their league, but Tadano Hitohito knows the truth: she's just really bad at communicating with others.Komi-san, who wishes to fix this bad habit of hers, tries to improve it with the help of Tadano-kun by achieving her goal of having 100 friends.",
          img: "assets/img/KomiTomo.png",
          aparicion: "2016-05-18",
          casa: "Shūkan Shōnen Sunday"
        },
        {
          nombre: "A Girl Who's Not Just Cute",
          bio: "Daily life of a herbivore, unlucky boyfriend and his amazing and sometimes intimidating girlfriend.",
          img: "assets/img/Shikimori.jpg",
          aparicion: "2018-9-03",
          casa: "Weekly Shōnen Magazine"
        },
        {
          nombre: "Kaiju No. 8",
          bio: "A man, unhappy with the work he has had to do in life, is involved in an unexpected event..! He becomes a Kaijuu, a monstrous creature, giving him a new chance to achieve what he always dreamed of!",
          img: "assets/img/kaiju8.jpg",
          aparicion: "2020-7-03 ",
          casa: "JUMP"
        },
        {
          nombre: "Blue Lock",
          bio: "Yoichi Isagi lost the opportunity to go to the national high school championships because he passed to his teammate who missed instead of shooting himself. Isagi is one of 300 U-18 strikers chosen by Jinpachi Ego, a man who was hired by the Japan Football Association after the 2018 FIFA World Cup, to guide Japan to winning the World Cup by destroying Japanese football. Ego's plan is to isolate the 300 strikers into a prison-like institution called 'Blue Lock', in order to create the world's biggest 'egotist'/striker, which has been lacking in Japanese football.",
          img: "assets/img/bluelock.jpg",
          aparicion: "2018-9-03",
          casa: "Weekly Shōnen Magazine"
        }
      ];

    constructor(){
        console.log('Character para usar');
    };
    getMangas():Manga[]{
        return this.Mangas;
    }
    getManga( idx: string){
      return this.Mangas[idx];
    }
    buscarManga(busqueda: string){
      let mangaArr:Manga[] = [];

        busqueda = busqueda.toLowerCase();

        for ( let i = 0; i< this.Mangas.length; i ++ ){

          let manga = this.Mangas[i];

          let nombre = manga.nombre.toLowerCase();
            if (nombre.indexOf( busqueda ) >= 0) {
              manga.idx = i;
              mangaArr.push(manga) 
            }
        }
        return mangaArr;
    }
}

export interface Manga{
    nombre: string;
    bio: string;
    img: string;
    aparicion: string;
    casa: string;
    idx?: number;
}