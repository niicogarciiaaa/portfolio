import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero2.html',
  styleUrl: './hero.scss'
})
export class HeroComponent implements OnInit, OnDestroy {
  public displayText: string = '';
  public currentTextIndex: number = 0;
  public currentCharIndex: number = 0;
  public isDeleting: boolean = false;
  public particles: number[] = [];
  
  private isAnimationRunning: boolean = false;
  
  private texts: string[] = [
    'Desarrollador Full Stack',
    'Creador de Experiencias Web',
    'Apasionado por la Tecnología',
    'Solucionador de Problemas'
  ];

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    
    // Test inicial del binding
    this.displayText = '';
    this.cdr.detectChanges();
    
    // Pequeño delay para asegurar que el DOM esté listo
    setTimeout(() => {
      this.displayText = ''; // Limpiar antes de empezar
      this.startTypewriterAnimation();
    }, 1000);
    
    this.particles = this.generateParticles();
  }

  ngOnDestroy() {
    this.isAnimationRunning = false;
  }

  private startTypewriterAnimation() {
    if (this.isAnimationRunning) {
      console.log('Animación ya está corriendo, evitando duplicado');
      return;
    }
    
    console.log('Iniciando animación typewriter'); // Debug
    this.isAnimationRunning = true;
    
    const typeSpeed = 100; // velocidad de escritura
    const deleteSpeed = 60; // velocidad de borrado
    const pauseTime = 3000; // pausa entre textos
    
    const runAnimation = () => {
      const currentText = this.texts[this.currentTextIndex];
      console.log(`Estado: ${this.isDeleting ? 'Borrando' : 'Escribiendo'}, Texto: "${currentText}", Char: ${this.currentCharIndex}`);
      
      if (!this.isDeleting) {
        // Escribiendo
        if (this.currentCharIndex < currentText.length) {
          this.displayText = currentText.substring(0, this.currentCharIndex + 1);
          this.currentCharIndex++;
          this.cdr.detectChanges(); // Forzar detección de cambios
          setTimeout(runAnimation, typeSpeed);
        } else {
          // Texto completo, pausar antes de borrar
          setTimeout(() => {
            this.isDeleting = true;
            runAnimation();
          }, pauseTime);
        }
      } else {
        // Borrando
        if (this.currentCharIndex > 0) {
          this.currentCharIndex--;
          this.displayText = currentText.substring(0, this.currentCharIndex);
          this.cdr.detectChanges(); // Forzar detección de cambios
          setTimeout(runAnimation, deleteSpeed);
        } else {
          // Texto borrado, cambiar al siguiente
          this.isDeleting = false;
          this.currentTextIndex = (this.currentTextIndex + 1) % this.texts.length;
          console.log('Cambiando al texto:', this.texts[this.currentTextIndex]); // Debug
          setTimeout(runAnimation, 300);
        }
      }
    };
    
    runAnimation();
  }



  // Animación de partículas flotantes
  private generateParticles(): number[] {
    return Array.from({ length: 20 }, (_, i) => i);
  }

  // Método para obtener posición aleatoria de partículas
  public getParticleStyle(index: number) {
    const left = Math.random() * 100;
    const animationDelay = Math.random() * 5;
    const animationDuration = 3 + Math.random() * 4;
    
    return {
      'left.%': left,
      'animation-delay': `${animationDelay}s`,
      'animation-duration': `${animationDuration}s`
    };
  }
}
