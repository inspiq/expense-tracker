import {ShoppingIcon} from 'src/icons';
import {
  TransactionCard,
  TransactionCategory,
  TransactionDescription,
  TransactionInfo,
  TransactionInfoLeft,
  TransactionInfoRight,
  TransactionPrice,
  TransactionTime,
} from './styles';

const RecentTransactionCard = ({card}: any) => {
  return (
    <TransactionCard>
      <TransactionInfoLeft>
        <ShoppingIcon />
        <TransactionInfo>
          <TransactionCategory>{card.category}</TransactionCategory>
          <TransactionDescription>{card.description}</TransactionDescription>
        </TransactionInfo>
      </TransactionInfoLeft>
      <TransactionInfoRight>
        <TransactionPrice>{card.price}</TransactionPrice>
        <TransactionTime>{card.time}</TransactionTime>
      </TransactionInfoRight>
    </TransactionCard>
  );
};

export default RecentTransactionCard;
