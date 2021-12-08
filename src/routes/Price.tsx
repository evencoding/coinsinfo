import { useState } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { fetchCoinHistody } from "../api";

const PriceContainer = styled.div`
  padding: 0px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

const PriceDate = styled.div``;

const PriceContent = styled.div``;

const PriceTime = styled.div`
  span {
    &:first-child {
      margin-right: 8px;
    }
    &:not(:last-child) {
      margin-bottom: 3px;
    }
  }
  display: flex;
  justify-content: space-between;
`;

interface IHistorical {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

interface ChartProps {
  coinId: string;
}

function Price({ coinId }: ChartProps) {
  const { isLoading, data } = useQuery<IHistorical[]>(
    ["ohlcv", coinId],
    () => fetchCoinHistody(coinId),
    { refetchInterval: 10000 }
  );
  const reverseData = data ? [...data].reverse() : null;
  return (
    <div>
      {isLoading ? (
        "Loading..."
      ) : (
        <>
          {reverseData?.map((v) => (
            <PriceContainer key={v.time_open}>
              <PriceDate>{v.time_open.slice(0, 10)}</PriceDate>
              <PriceContent>
                <PriceTime>
                  <span>Open</span>
                  <span>{v.open.toFixed(3)}</span>
                </PriceTime>
                <PriceTime>
                  <span>High</span>
                  <span>{v.high.toFixed(3)}</span>
                </PriceTime>
                <PriceTime>
                  <span>Low</span>
                  <span>{v.low.toFixed(3)}</span>
                </PriceTime>
                <PriceTime>
                  <span>Close</span>
                  <span>{v.close.toFixed(3)}</span>
                </PriceTime>
              </PriceContent>
            </PriceContainer>
          ))}
        </>
      )}
    </div>
  );
}

export default Price;
