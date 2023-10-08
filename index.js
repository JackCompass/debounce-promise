class Debounce {
    constructor() {
        if (Debounce.instance) {
            return Debounce.instance;
        }
        this.debounceMethod = null;
        Debounce.instance = this;
    }

    handleDebounce = (func, debounceTime, options) => {
        if (this.debounceMethod) {
            clearTimeout(this.debounceMethod);
        }
        return new Promise((resolve, reject) => {
            this.debounceMethod = setTimeout(() => {
                try {
                    const result = func(options);
                    resolve(result);
                } catch (error) {
                    reject(error);
                }
            }, debounceTime);
        });
    };
}

const debounced = (func, debounceTime, options) => {
    const debounceInstance = new Debounce();
    return debounceInstance.handleDebounce(func, debounceTime, options);
};

export default debounced;
