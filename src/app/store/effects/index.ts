import { ProductsEffects } from './products.effects';
import { CartEffects } from './cart.effects';
import { ToastEffects } from './toast.effects';

export const effects: any[] = [ProductsEffects, CartEffects, ToastEffects];

export * from './products.effects';
export * from './cart.effects';
export * from './toast.effects';
