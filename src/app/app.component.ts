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

  ngOnInit() {
    if (localStorage.getItem("initValue")) {
      this.initValue = Number(localStorage.getItem("initValue"));
      this.rate = Number(localStorage.getItem("rate"));
      this.fixed = Number(localStorage.getItem("fixed"));
      this.n = Number(localStorage.getItem("n"));
    } else {
      this.clear();
    }
  }

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

  save(): void {
    localStorage.setItem("initValue", this.initValue.toString());
    localStorage.setItem("rate", this.rate.toString());
    localStorage.setItem("fixed", this.fixed.toString());
    localStorage.setItem("n", this.n.toString());
  }

  clear(): void {
    localStorage.setItem("initValue", "0");
    localStorage.setItem("rate", "0");
    localStorage.setItem("fixed", "0");
    localStorage.setItem("n", "0");
    this.initValue = 0;
    this.rate = 0;
    this.fixed = 0;
    this.n = 0;
  }
}
