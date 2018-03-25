import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-media-alunos",
  templateUrl: "./media-alunos.component.html",
  styleUrls: ["./media-alunos.component.css"]
})
export class MediaAlunosComponent implements OnInit {
  constructor() {}
  mediaAluno(n1: number, n2: number) {
    return ((n1 * 2) + (n2 * 3)) / 5;
  }


  ngOnInit() {}
}
