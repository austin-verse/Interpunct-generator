import { useState } from "react";
import { Button } from "react-bootstrap";
import { CopyToClipboard } from "react-copy-to-clipboard";
import checkImg from "./img/checkImg.png";
import githubImg from "./img/githubImg.png";
import "./App.css";

function App() {
	//  버튼을 눌리기 전 = 0, 버튼을 눌린 후 = 1
	let [copiedOrNot, setCopiedOrNot] = useState("0");
	// 5초 후 버튼 초기화
	let btnReturn = function () {
		setTimeout(function () {
			setCopiedOrNot("0");
		}, 5000);
	};
	return (
		<div className="App">
			<CopyToClipboard text="·">
				<div className="mb-2">
					<Button
						variant="secondary"
						size="lg"
						onClick={() => {
							setCopiedOrNot("1");
							btnReturn();
						}}
					>
						{copiedOrNot === "0" ? (
							<div>가운뎃점 복사</div>
						) : (
							<div className="copiedBtn">
								<img className="checkImg" src={checkImg} />
								<div>복사완료!</div>
							</div>
						)}
					</Button>
				</div>
			</CopyToClipboard>
			<a
				href="https://github.com/austin-verse/Interpunct-generator"
				target="_blank"
			>
				<Button type="button" className="githubBtn">
					<img src={githubImg} />
				</Button>
			</a>
			<link
				rel="stylesheet"
				href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
			></link>
		</div>
	);
}

export default App;
