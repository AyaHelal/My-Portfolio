import { Component } from '@angular/core';
import {
  LucideCode2,
  LucideDatabase,
  LucideDynamicIcon,
  LucideLayers3,
  LucideWrench,
} from '@lucide/angular';
import { SkillColor, skillGroups } from '../../data/portfolio.content';
import {AnimateOnScroll} from '../../shared/animate-on-scroll'

const colorClasses: Record<SkillColor, string> = {
  mint: 'bg-[#1b2117] [&_svg]:text-lime',
  yellow: 'bg-[#202017] [&_svg]:text-[#f5c96a]',
  peach: 'bg-[#201a15] [&_svg]:text-[#ff9c72]',
  blue: 'bg-[#151c1e] [&_svg]:text-[#7bd4db]',
};

@Component({
  selector: 'app-skills-section',
  imports: [LucideDynamicIcon,AnimateOnScroll],
  templateUrl: './skills-section.html',
  styleUrl: './skills-section.css',
})
export class SkillsSection {
    private readonly iconMap = {
      'code-2': LucideCode2,
      'layers-3': LucideLayers3,
      database: LucideDatabase,
      wrench: LucideWrench,
    } as const;

    readonly groups = skillGroups.map((group) => ({
      ...group,
      icon: this.iconMap[group.icon],
      colorClass: colorClasses[group.color],
    }));
}
