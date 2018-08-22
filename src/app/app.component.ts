import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  initValue: number;
  rate: number;
  fixed: number;
  n: number;

  calc(): number {
    if (
      isNaN(this.initValue) ||
      isNaN(this.rate) ||
      isNaN(this.fixed) ||
      isNaN(this.n)
    ) {
      return null;
    }

    let answer: number = this.initValue;
    let lambda: number = 1 + this.rate / 100;
    let constant: number = 12 * this.fixed;
    for (let i = 1; i <= this.n; i++) {
      answer *= lambda;
      answer += constant;
    }
    return Math.floor(answer);
  }

  calcfixed(): number {
    if (isNaN(this.n) || isNaN(this.fixed)) {
      return null;
    }
    return this.fixed * this.n * 12;
  }

  calcArray(): number[] {
    if (
      isNaN(this.initValue) ||
      isNaN(this.fixed) ||
      isNaN(this.rate) ||
      isNaN(this.n)
    ) {
      return null;
    }

    let answer: number = this.initValue;
    let lambda: number = 1 + this.rate / 100;
    let constant: number = 12 * this.fixed;
    let returnNum: number[] = [answer];
    for (let i = 1; i <= this.n; i++) {
      answer *= lambda;
      answer += constant;
      returnNum.push(Math.floor(answer));
    }
    return returnNum;
  }
}
