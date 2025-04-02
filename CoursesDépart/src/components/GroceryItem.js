app.component("grocery-item", {
  props: [produit],
  template: /*HTML*/ `
  <div class="liste">
    <ul> 
        <li>
            <p>{{produit}}</p>
        </li>
    </ul>
  </div> 
  `,
});
