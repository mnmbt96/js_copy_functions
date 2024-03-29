console.log("JS running");

function copyToClipboard(element) {
  // const copyText = document.querySelector(`.${element}`).children;
  // let finalText = "";

  // for (let i = 0; i < copyText.length; i++) {
  //   const child = copyText[i];
  //   if (child.tagName === "DIV") {
  //     finalText += child.textContent + "\n"; // テキストを取得して改行を追加
  //   } else if (child.tagName === "BR") {
  //     finalText += "\n"; // <br> タグがある場合は改行を追加
  //   }
  // }

  // console.log(finalText);

  // const textarea = $("<textarea>") // 新しい <textarea> 要素を作成
  //   .appendTo("body") // 作成した <textarea> 要素を文書の <body> 要素に追加
  //   .val(str) // <textarea> 要素の値（テキスト）を、変数copyTextの値に設定
  //   .select(); // 要素内のテキストを選択状態にする

  const originalElement = document.querySelector(`.${element}`);
  const str = originalElement.innerText; // または originalElement.textContent;

  console.log(str);

  const textarea = document.createElement("textarea"); // 新しい <textarea> 要素を作成
  document.body.appendChild(textarea); // 作成した <textarea> 要素を文書の <body> 要素に追加
  textarea.value = str; // <textarea> 要素の値（テキスト）を、変数 str の値に設定
  textarea.select(); // 要素内のテキストを選択状態にする

  try {
    // クリップボードAPIを使用して選択されたテキストをクリップボードにコピー
    navigator.clipboard.writeText(str);
    console.log("テキストがクリップボードにコピーされました！");
  } catch (err) {
    console.error("テキストをクリップボードにコピーできませんでした:", err);
  } finally {
    // 不要になった <textarea> を文書から削除
    textarea.remove();
  }
}
