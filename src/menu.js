import Fish1 from './fish1.jpg';
import Fish2 from './fish2.jpg';
import Fish3 from './fish3.jpg';
import Fish4 from './fish4.jpg';
import Fish5 from './fish5.jpg';
import Fish6 from './fish6.jpg';

export default function menu(){
  const content = document.createElement('div');
  content.setAttribute('id', 'content')

  const menu = document.createElement('h2');

  const fish1Picture = new Image();
  const fish2Picture = new Image();
  const fish3Picture = new Image();
  const fish4Picture = new Image();
  const fish5Picture = new Image();
  const fish6Picture = new Image();

  fish1Picture.src = Fish1;
  fish2Picture.src = Fish2;
  fish3Picture.src = Fish3;
  fish4Picture.src = Fish4;
  fish5Picture.src = Fish5;
  fish6Picture.src = Fish6;

  fish1Picture.setAttribute('alt', 'A beautiful fish');
  fish2Picture.setAttribute('alt', 'A beautiful striped fish');
  fish3Picture.setAttribute('alt', 'A school of fish');
  fish4Picture.setAttribute('alt', 'A jellyfish');
  fish5Picture.setAttribute('alt', 'A lionfish');
  fish6Picture.setAttribute('alt', 'A dolphin');

  const fish1Description = document.createElement('h3');
  const fish2Description = document.createElement('h3');
  const fish3Description = document.createElement('h3');
  const fish4Description = document.createElement('h3');
  const fish5Description = document.createElement('h3');
  const fish6Description = document.createElement('h3');

  menu.innerHTML = 'This be our fantastic menu!';
  fish1Description.innerHTML = 'This wonderful fish as tasty as it is beautiful';
  fish2Description.innerHTML = 'This lovely fish goes well in a sandwich with a slice of cheese.';
  fish3Description.innerHTML = 'I hope you brought your appitite because there are a lot of these fish here.';
  fish4Description.innerHTML = 'This is a very sweet fish. Just dab some peanut butter on top for a great lunch.';
  fish5Description.innerHTML = 'A naturally spicy fish!';
  fish6Description.innerHTML = "Don't try to tell me this isn't a fish. It lives in the water doesn't it?";

  content.appendChild(menu);

  content.appendChild(fish1Description);
  content.appendChild(fish1Picture);

  content.appendChild(fish2Description);
  content.appendChild(fish2Picture);

  content.appendChild(fish3Description);
  content.appendChild(fish3Picture);

  content.appendChild(fish4Description);
  content.appendChild(fish4Picture);

  content.appendChild(fish5Description);
  content.appendChild(fish5Picture);

  content.appendChild(fish6Description);
  content.appendChild(fish6Picture);

  return content;  
}