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
  mint: 'bg-skill-mint [&_svg]:text-lime',
  yellow: 'bg-skill-yellow [&_svg]:text-[#f5c96a]',
  peach: 'bg-skill-peach [&_svg]:text-[#ff9c72]',
  blue: 'bg-skill-blue [&_svg]:text-[#7bd4db]',
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
