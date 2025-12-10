import { ProductCard } from '../components/ProductCard';
import { useCart, Product } from '../contexts/CartContext';
import { toast } from 'sonner@2.0.3';

export const products: Product[] = [
  {
    id: '1',
    name: 'Rapadura Pura 500g',
    price: 8.00,
    weight: '500g',
    image: 'https://images.unsplash.com/photo-1753121773108-970cffdfc2f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicm93biUyMHN1Z2FyJTIwY2FuZSUyMHN3ZWV0fGVufDF8fHx8MTc2NDQ0Mjg3Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Feita artesanalmente com caldo de cana fresco. Produto 100% natural, sem conservantes ou aditivos químicos.',
  },
  {
    id: '2',
    name: 'Rapadura com Coco',
    price: 10.00,
    weight: '350g',
    image: 'https://images.unsplash.com/photo-1665833613236-7c1d087463b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NvbnV0JTIwZGVzc2VydHxlbnwxfHx8fDE3NjQ0NDI4NzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Deliciosa combinação de rapadura tradicional com coco ralado fresco. Sabor único e irresistível.',
  },
  {
    id: '3',
    name: 'Rapadura com Amendoim',
    price: 12.00,
    weight: '300g',
    image: 'https://images.unsplash.com/photo-1682528565154-8e44ebd757e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWFudXQlMjBjYW5keXxlbnwxfHx8fDE3NjQ0NDI4NzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Rapadura com pedaços generosos de amendoim torrado. Textura crocante e sabor marcante.',
  },
];

export function Catalog() {
  const { addToCart } = useCart();

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    toast.success(`${product.name} adicionado ao carrinho!`);
  };

  return (
    <div className="min-h-screen" style={{ background: '#f7f4ec' }}>
      <div className="max-w-7xl mx-auto px-5 py-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
