import './searchbar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Searchbar() {
    return (

            <div class="search">
                <input type="text" class="searchTerm" id="input_text"></input>
                <button type="submit" class="searchButton">
                    <i class="fa fa-search"></i>
                </button>
      
        </div>

    );
}