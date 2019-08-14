import { MoviesService } from './../movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
  providers: [
    MoviesService
  ]
})
export class FeedPage implements OnInit {

  public Titulo: string = "Social Bella Lorena";
  public Autor: any = "Limup TI";
  public Corporation: string = "Limup Corp.";
  
  public listar_filmes = new Array<any>();

  constructor(private movieService: MoviesService) {

  }

  public json = {
    feeds: [
      {
        background: "/assets/images/madison.jpg",
        avatar: "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y",
        autor: "Arnaldo Junior",
        titulo: "Estou criando um app fantástico...",
        texto: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bo....",
        tempo: "1min ago"
      },
      {
        background: "/assets/images/madison.jpg",
        avatar: "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y",
        autor: "Enzo Soares",
        titulo: "Atendimento Fantástico...",
        texto: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has be....",
        tempo: "2min ago"
      }
    ]
  };

  public somaDoisNumeros(num1: number, num2: number): void {
    alert("Minha função funcionou");
    alert(num1 + num2);
  }

  ngOnInit() {
    this.somaDoisNumeros(10, 99);
    this.movieService.getLatestMovies().subscribe(
      data => {

        const response = (data as any);
        const objeto_retorno = response;

        this.listar_filmes = objeto_retorno.results;

        console.log(objeto_retorno);

      }, error => {
        console.error(error);
      });
  }

}
