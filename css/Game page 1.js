#pragma strict

public var gscore:int = 0;
public var scoreText:UnityEngine.UI.Text;



function Update () {

scoreText.text="Score: " + gscore;
	

}