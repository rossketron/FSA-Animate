app.service('TransitionModel', function(Map) {
	function TransitionModel(source, target, symbols) {
        if(source[0] === 'N') this.source = source;
        else this.source = `N${source}`;

        if(target[0] === 'N') this.target = target;
        else this.target = `N${target}`;

        if(Array.isArray(symbols)) this.symbols = symbols;
    	else {
    		this.symbols = [];
    		this.symbols.push(symbols);
    	}

    	this.id = `${this.source},${this.target}`;
    }
    return TransitionModel;
});