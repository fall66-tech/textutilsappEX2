import React, {useState} from 'react'





export default function TextForm(props) {

	
	function handleOnChange(event) {
		setText(event.target.value)
	}
	function handleUpClick() {
		const newText = text.toUpperCase();
		setText(newText);
		props.showAlert(" conveted to upper case", "success");
	}
	function handleLoClick() {
		const newText = text.toLowerCase();
		setText(newText);
		props.showAlert(" conveted to lower case", "success");
	}
	function handleClearClick() {
		setText("");
		props.showAlert(" text is cleared", "success");
	}


	const speak = () => {
		let msg = new SpeechSynthesisUtterance();
		msg.text = text;
		window.speechSynthesis.speak(msg);
		if (msg.text === "") {
			props.showAlert(" there is no input", "danger");
		}
		else{
			props.showAlert(" speach initiated", "success");
		}
	  }

	const handleCopy = () => {
		var text1 = document.getElementById("myBox");
		text1.select();
		navigator.clipboard.writeText(text1.value);
		if (text1.value === "") {
			props.showAlert(" there is no input", "danger");
		}
		else{
			props.showAlert(" your text has been copied", "success");
		}
	}
	
	const [text, setText] = useState("");
  return (
	<>
    	<div className='container'>
          
        	<div className="mb-3" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
				<h1>{props.heading}</h1>
				<textarea className="form-control" placeholder='enter text here' value={text} onChange={handleOnChange} id="myBox" rows="5"></textarea>
        	</div>
        	<button className="btn btn-primary me-2" onClick={handleUpClick}>convert to uppercase</button>
			<button className="btn btn-primary" onClick={handleLoClick}>convert to Lowercase</button>
			<button className="btn btn-primary ms-2" onClick={handleClearClick}>clear text</button>
			<button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
			<button className="btn btn-primary me-2" onClick={handleCopy}>Copy your text</button>
    	</div>



		<div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
			<h1>Your text summary</h1>
			<p>your text has {text.length} characters and {text.replace(/\n/g, " ").split(' ').filter(value => value !== "").length} words</p>
			<h2>Preview</h2>
			<p>{text.length > 0 ? text: "Enter yoor text for preview"}</p>
		</div>
	</>
  )
  }
