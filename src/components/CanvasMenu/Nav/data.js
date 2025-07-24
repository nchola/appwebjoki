import { navItems, footerLinks } from '../../../data/navigation';

export const links = navItems.map(({ name, href }) => ({ title: name, href }));
export { footerLinks };