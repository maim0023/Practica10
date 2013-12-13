function mostrarAlerta()
			{
				alert('Click');
			}
			function click()
			{
				document.getElementsByTagName('p')[0].onclick=mostrarAlerta;
			}
			window.onload=click;