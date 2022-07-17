import * as S from "./FestivalList.Styles";
import InfiniteScroll from "react-infinite-scroller";
import FestivalListUIAdd from "./FestivalList.PresenterAdd";

export default function FestivalListUI(props) {
  return (
    <>
      <S.Wrapper>
        <S.Select>
          <option>등록 순</option>
          {/* <option>인기 순</option> */}
          <option>날짜 순</option>
        </S.Select>
        <S.InsideWrapper>
          <InfiniteScroll
            pageStart={0}
            loadMore={props.ToloadFunc}
            hasMore={true}
          >
            {props.data?.fetchPosts.map(el => (
              <FestivalListUIAdd data={props.data} key={el._id} el={el} />
            ))}
          </InfiniteScroll>
        </S.InsideWrapper>
      </S.Wrapper>
    </>
  );
}
