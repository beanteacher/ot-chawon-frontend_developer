import { ProductCardModel } from '../lib/mockProducts';

function stateLabel(state: ProductCardModel['state']) {
  if (state === 'ready') return '운영 가능';
  if (state === 'warning') return '주의 필요';
  return '배포 보류';
}

export default function ProductStatusBoard({ items }: { items: ProductCardModel[] }) {
  return (
    <section className="board">
      {items.map((item) => (
        <article key={item.id} className={`card state-${item.state}`}>
          <p className="card-id">{item.id}</p>
          <h2>{item.name}</h2>
          <p className="state">{stateLabel(item.state)}</p>
          <p className="reason">{item.reason}</p>
        </article>
      ))}
    </section>
  );
}
