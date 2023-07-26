import "./styles.css";
export default function App() {
  // toSorted
  const list1 = [3, 1, 2];
  const list2 = list1.toSorted(); // ソート

  // console.log(list1); // [3, 1, 2] 元の配列のまま
  // console.log(list2); // [1, 2, 3] 加工後の配列

  // toReversed
  const list3 = [1, 2, 3];
  const list4 = list3.toReversed(); // 逆転

  // console.log(list3); // [1, 2, 3] 元の配列のまま
  // console.log(list4); // [3, 2, 1] 加工後の配列

  const fruits = ["apple", "orange", "lemon"];

  const fruits2 = fruits.toSpliced(1, 1); // 1番目の要素を1つ削り、そこに"みかん"を追加
  const fruits3 = fruits.toSpliced(1, 1, "みかん"); // 1番目の要素を1つ削り、そこに"みかん"を追加

  // console.log(fruits); // ['apple', 'orange', 'lemon'] 元の配列
  // console.log(fruits2);　// ['apple', 'lemon'] ※'orange'がなくなっている
  // console.log(fruits3); // ['apple', 'みかん', 'lemon'] ※'orange'が'みかん'に

  // with　置換
  const with1 = [1, 2, 3, 4, 5];
  const with2 = with1.with(1, 100);
  // console.log(with1); // [1, 2, 3, 4, 5]
  // console.log(with2); // [1, 100, 3, 4, 5]

  // findLast, findLastIndex

  const listForFind = [500, 20, 200, 300, 50, 150];

  // 最初から順番に、条件にあう要素を検索
  const item1 = listForFind.find((item) => item < 100);
  // console.log(item1); // 20

  // 最初から順番に、条件にあう要素のインデックス番号を検索
  const index1 = listForFind.findIndex((item) => item < 100);
  // console.log(index1); // 1

  // findLast 最後から順番に、条件にあう要素を検索
  const item2 = listForFind.findLast((item) => item < 100);
  // console.log(item2); // 50
  console.log(listForFind); // 50

  // findLastIndex 最後から順番に、条件にあう要素のインデックス番号を検索
  const index2 = listForFind.findLastIndex((item) => item < 100);
  // console.log(index2); // 4

  return (
    <div className="App">
      <h1>ES2023</h1>
      <h2>NEW FUNCTION</h2>
    </div>
  );
}
