import type { FC } from 'react'
import type { Product } from '@/types'

interface ProductsTableProps {
  products: Product[]
}

const ProductsTable: FC<ProductsTableProps> = ({ products }) => (
  <div className="table-card">
    <h3 className="table-card__title">Топ товаров</h3>
    <table className="products-table">
      <thead>
        <tr>
          <th>Товар</th>
          <th>Цена</th>
          <th>Продано</th>
          <th>Остаток</th>
          <th>Рейтинг</th>
        </tr>
      </thead>
      <tbody>
        {products.map((p) => (
          <tr key={p.id}>
            <td>
              <div className="product-name">{p.name}</div>
              <div className="product-sku">{p.sku}</div>
            </td>
            <td>{p.price.toLocaleString('ru-RU')} ₽</td>
            <td>{p.sold.toLocaleString('ru-RU')}</td>
            <td>{p.stock >= 9999 ? '∞' : p.stock}</td>
            <td>
              <span className="rating">⭐ {p.rating}</span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

export default ProductsTable
