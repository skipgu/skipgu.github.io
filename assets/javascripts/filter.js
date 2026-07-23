// Multi-select filter - OR within group, AND across groups.
document.addEventListener('DOMContentLoaded', function () {
    let filterBar = document.querySelector('.filter-bar');
    if (!filterBar) return;

    let groups = filterBar.querySelectorAll('.filter-group');
    let entries = document.querySelectorAll('.entry');
    let noResults = document.querySelector('.no-results');
    let searchInput = document.querySelector('.filter-search');
    let searchTerm = '';
    let selected = {};

    function applyFilters() {
        let blogCount = 0;
        entries.forEach(function (entry) {
            let entryYear = entry.getAttribute('data-year');
            let entryTags = (entry.getAttribute('data-tags') || '').split(',');
            let show = true;
            
            let title = entry.querySelector('.entry-title').textContent.toLowerCase();
            if (searchTerm && title.indexOf(searchTerm) === -1) {
                show = false;
            }

            groups.forEach(function (group) {
                if (!show) return;
                let type = group.getAttribute('data-filter-type');
                let values = selected[type];
                if (!values || values.length === 0) return;
                let entryValue = type === 'year' ? entryYear : entryTags;
                show = Array.isArray(entryValue)
                    ? values.some(function (selectedValue) { return entryValue.indexOf(selectedValue) !== -1; })
                    : values.indexOf(entryValue) !== -1;
            });

            entry.style.display = show ? '' : 'none';
            if (show) blogCount++;
        });
        if (noResults) noResults.style.display = blogCount === 0 ? 'block' : 'none';
    }

    groups.forEach(function (group) {
        let type = group.getAttribute('data-filter-type');
        let buttons = group.querySelectorAll('.filter-button');
        selected[type] = [];

        buttons.forEach(function (button) {
            button.addEventListener('click', function () {
                let value = this.getAttribute('data-filter');

                if (value === 'all') {
                    selected[type] = [];
                } else {
                    let matchIndex = selected[type].indexOf(value);
                    matchIndex !== -1 ? selected[type].splice(matchIndex, 1) : selected[type].push(value);
                }

                buttons.forEach(function (filterButton) {
                    let filterValue = filterButton.getAttribute('data-filter');
                    filterButton.classList.toggle('active', filterValue === 'all' ? selected[type].length === 0 : selected[type].indexOf(filterValue) !== -1);
                });

                applyFilters();
            });
        });
    });

    if (searchInput) {
        searchInput.addEventListener('input', function () {
            searchTerm = this.value.toLowerCase();
            applyFilters();
        });
    }
});
