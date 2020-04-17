class TinyPagination {

    pageNo = 1

    constructor(pageSize, data) {
        this.pageSize = pageSize
        this.data = data
    }

    getPageData(pageNo) {
        this.pageNo = pageNo
        const offset = (pageNo - 1) * this.pageSize
        return (offset + this.pageSize >= this.data.length) ? this.data.slice(offset, this.data.length) : this.data.slice(offset, offset + this.pageSize);
    }

    getPageLength() {
        return Math.ceil(this.data.length / this.pageSize)
    }

    getCurrentPageNo() {
        return this.pageNo
    }

    setData(newData) {
        this.data = newData
    }

    nextPage() {
        return this.getPageData(this.pageNo + 1)
    }

    previousPage() {
        return this.getPageData(this.pageNo - 1)
    }

    setPageSize(pageSize) {
        this.pageSize = pageSize
    }

    sortData(sortType, keyName) {
        return this.data.sort((a, b) => {
            let x = a
            let y = b

            if(keyName){
                x = a[keyName] ? a[keyName] : '';
                y = b[keyName] ? b[keyName] : '';
            }
            
            if (typeof x === 'string') {
                x = x.charCodeAt();
            }
            if (typeof y === 'string') {
                y = y.charCodeAt();
            }

            if (sortType === 0) {
                return x - y;
            } else {
                return y - x;
            }
        })
    }
}

module.exports = TinyPagination 