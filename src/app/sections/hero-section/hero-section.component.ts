import { Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css']
})
export class HeroSectionComponent {
  @ViewChild('heroText', { static: true }) heroText!: ElementRef;
  @ViewChild('heroSubText', { static: true }) heroSubText!: ElementRef;
  @ViewChild('ctaButton', { static: true }) ctaButton!: ElementRef;
  @ViewChild('webCanvas', { static: true }) canvasRef!: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    gsap.to(this.heroText.nativeElement, { opacity: 1, y: 0, duration: 1, ease: "power3.out" });
    gsap.to(this.heroSubText.nativeElement, { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: "power3.out" });
    gsap.to(this.ctaButton.nativeElement, { opacity: 1, scale: 1, duration: 1, delay: 0.6, ease: "elastic.out(1,0.5)" });

    this.initCanvas();
  }

  initCanvas() {
    const canvas = this.canvasRef.nativeElement as HTMLCanvasElement;
    const ctx = canvas.getContext('2d')!;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: { x: number; y: number; size: number; speedX: number; speedY: number }[] = [];

    for (let i = 0; i < 150; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: 2,
        speedX: Math.random() * 2 - 1,
        speedY: Math.random() * 2 - 1,
      });
    }

    const mouse = { x: 0, y: 0 };
    
    this.renderer.listen(canvas, 'mousemove', (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
    });

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;

        ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        if (Math.hypot(p.x - mouse.x, p.y - mouse.y) < 100) {
          ctx.strokeStyle = "rgba(255, 255, 255, 0.2)";
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      });

      requestAnimationFrame(animate);
    }

    animate();
  }

  scrollToSection(sectionId: string, event: Event) {
    event.preventDefault();

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
