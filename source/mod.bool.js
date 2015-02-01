(function($dom) {
    /* Has Attribute Checker */
    $dom.module.hasAttr = function(name) {
        var has = false, hasfalse = false;

        var atrs = Object.keys(this.attr());

        if (isString(name)) {
            if (name.match(/\s+/)) {
                name = name.split(/\s+/);

                foreach(name, function(key) {
                    if (atrs.indexOf(key) > -1) {
                        has = true;
                    } else {
                        hasfalse = true;
                    }
                });

                return has === true && hasfalse === false ? true : false;
            } else {
                if (atrs.indexOf(name) > -1) {
                    has = true;
                }
            }
        } else if (isArray(name)) {
            foreach(name, function(key) {
                if (atrs.indexOf(key) > -1) {
                    has = true;
                }
            });
        }

        return has;
    };

    /* Has Data Attribut Checker */
    $dom.module.hasData = function(name) {
        var has = false, hasfalse = false;

        if (isString(name)) {
            if (name.match(/\s+/)) {
                var ns = name.split(/\s+/);

                foreach(ns, function (value, i) {
                    name = name.replace(value, 'data-' + value);
                });
            } else {
                name = 'data-' + name;
            }
        } else if (isArray(name)) {
            foreach(name, function (value, i) {
                name[i] = 'data-' + value;
            });
        }

        return this.hasAttr(name);
    };

    /* Has Class Checker */
    $dom.module.hasClass = function(name) {
        var has = false, hasfalse = false;

        var cls = this.attr('class').split(/\s+/);

        if (isString(name)) {
            if (name.search(/\s+/)) {
                name = name.split(/\s+/);

                foreach(name, function (clas) {
                    if (cls.indexOf(clas) > -1) {
                        has = true;
                    } else {
                        hasfalse = true;
                    }
                });

                return has === true && hasfalse === false ? true : false;
            } else {
                if (cls.indexOf(name) > -1) {
                    has = true;
                }
            }
        } else if (isArray(name)) {
            foreach(name, function(clas) {
                if (cls.indexOf(clas) > -1) {
                    has = true;
                }
            });
        }

        return has;
    };

    /* Check is equal with condition */
    $dom.module.is = function(query) {
        if (this.length <= 0) return false;

        if (isString(query)) {
            return this.first().filter(query).length > 0 ? true : false;
        } else if (isHTML(query)) {
            return this.get(0) === query ? true : false;
        }

        return false;
    };

    /* Check not equal with conditon */
    $dom.module.not = function(query) {
        return !this.is(query) ? true : false;
    };
})(DOMList);
