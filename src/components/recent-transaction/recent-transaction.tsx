import {Title} from 'src/components';
import {
  Bars,
  ButtonSeeAll,
  ButtonTitle,
  RecentTransactionCards,
  Separator,
  WrapperCard,
} from './styles';
import RecentTransactionCard from './transaction-card/recent-transaction-card';

const transactions = [
  {
    id: 1,
    category: 'Shopping',
    price: '- $120',
    time: '10:00 AM',
    description: 'Buy some grocery',
  },
  {
    id: 2,
    category: 'Subscription',
    price: '- $80',
    time: '03:30 PM',
    description: 'Disney+ Annual..',
  },
  {
    id: 3,
    category: 'Food',
    price: '- $32',
    time: '07:30 PM',
    description: 'Buy a ramen',
  },
];

export const RecentTransaction = () => {
  return (
    <>
      <Bars>
        <Title>Recent Transaction</Title>
        <ButtonSeeAll activeOpacity={0.8}>
          <ButtonTitle>See All</ButtonTitle>
        </ButtonSeeAll>
      </Bars>
      <RecentTransactionCards>
        {transactions.map(card => (
          <WrapperCard key={card.id}>
            <RecentTransactionCard card={card} />
            {transactions.length !== card.id ? <Separator /> : null}
          </WrapperCard>
        ))}
      </RecentTransactionCards>
    </>
  );
};
