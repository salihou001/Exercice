import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { CSSPlugin, CSSRulePlugin } from 'gsap/all';
gsap.registerPlugin(CSSPlugin, CSSRulePlugin);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    
  }
}
