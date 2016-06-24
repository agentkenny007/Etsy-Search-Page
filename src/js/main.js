import {results} from './results';
import $ from 'jquery';

$('button').click(function(e){ e.preventDefault(); });

var resultsContainer = $('.results');
results.results.forEach(function(r){
    var n =
    `
        <li>
            <div class="image">
                <img src="http://placehold.it/34x27">
                <a href="${r.url}"><img src="${r.Images[0].url_570xN}"></a>
            </div>
            <div class="info">
                <span class="result-title">${r.title}</div>
                <span class="shop-name">${r.Shop.shop_name}</span>
                <span class="price">$${r.price}</span>
            </div>
        </li>
    `;
    resultsContainer.append(n);
});

var D = new Date();
$('footer').prepend(`<span>&copy; ${D.getFullYear()} Etsy, Inc.</span>`);
