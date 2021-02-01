import { ProductsEffects } from './products.effects';
import { CartEffects } from './cart.effects';
import { ToastEffects } from './toast.effects';
import { RouterEffects } from './router.effects';

export const effects: any[] = [ProductsEffects, CartEffects, ToastEffects, RouterEffects];

export * from './products.effects';
export * from './cart.effects';
export * from './toast.effects';
