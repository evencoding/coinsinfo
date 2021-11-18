import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getCoins } from "../api";

const Container = styled.div`
  padding: 0px 20px;
  max-width: 450px;
  margin: 0 auto;
`;

const Header = styled.div`
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.div`
  font-size: 32px;
  color: ${(props) => props.theme.accentColor};
`;

const CoinsList = styled.ul``;

const Coin = styled.li`
  display: flex;
  align-items: center;
  background-color: #2f3640;
  border: 2px solid #899db9;
  color: whitesmoke;
  border-radius: 20px;
  margin-bottom: 20px;
  a {
    padding: 15px;
    display: flex;
    align-items: center;
    transition: color 0.2s ease-in;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

const Loading = styled.div`
  font-size: 25px;
  text-align: center;
`;

const Img = styled.img`
  height: 35px;
  width: 35px;
  margin-right: 10px;
`;

interface ICoins {
  id: string;
  is_active: boolean;
  is_new: boolean;
  name: string;
  rank: number;
  symbol: string;
  type: string;
}

function Coins() {
  const { isLoading, data } = useQuery<ICoins[]>("coins", getCoins);
  return (
    <Container>
      <Header>
        <Title>Coins</Title>
      </Header>
      {isLoading ? (
        <Loading>Loading...</Loading>
      ) : (
        <CoinsList>
          {data?.slice(0, 99).map((coin) => (
            <Coin key={coin.id}>
              <Link
                to={{
                  pathname: `/${coin.id}`,
                  state: { name: coin.name },
                }}
              >
                <Img
                  src={`https://cryptoicon-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
                  alt=""
                />
                <span>{coin.name} &rarr;</span>
              </Link>
            </Coin>
          ))}
        </CoinsList>
      )}
    </Container>
  );
}

export default Coins;
