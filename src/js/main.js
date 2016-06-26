import {results} from './results';
import $ from 'jquery';

$('button').click(function(e){ e.preventDefault(); });

$('.results-info .left').append(`<span class="search-term">${results.params.keywords}</span> (${results.count} Results)`);

var resultsContainer = $('.results');
results.results.forEach(function(r){
    resultsContainer.append(`
        <li>
            <a href="${r.url}" title="${r.title}">
                <div class="image">
                    <img src="http://placehold.it/34x27">
                    <span style="background: url(${r.Images[0].url_570xN}) center/cover no-repeat;"></span>
                </div>
                <div class="info">
                    <span class="result-title">${r.title}</span>
                    <span class="shop-name">${r.Shop.shop_name}</span>
                    <span class="price">$${r.price}</span>
                </div>
                <div class="item">
                    <span class="fav"></span>
                    <span class="share"></span>
                </div>
            </a>
        </li>
    `);
});

var D = new Date();
$('footer').prepend(`<span>&copy; ${D.getFullYear()} Etsy, Inc.</span>`);
