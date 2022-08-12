


class Qwiz {
    constructor($qwiz, qwizSlider) {
        this.$qwiz = $qwiz
        this.qwizSlider = qwizSlider
    }

    init() {
        this.initListeners();
        this.checkForm();
    }

    initListeners() {
        this.$qwiz.addEventListener('input', this.checkForm.bind(this))
        this.$qwiz.addEventListener('input', this.checkCondition.bind(this))
        this.qwizSlider.on('slideChange', this.checkForm.bind(this));
    }

    checkForm() {
        const activeForm = this.qwizSlider.visibleSlides[0];
    
        const inputs = [
            ...activeForm.querySelectorAll('input'),
            ...activeForm.querySelectorAll('textarea'),
            ...activeForm.querySelectorAll('select')
        ];
        
        let isReady = false;

        for (const i in inputs) {
            if (!Object.hasOwnProperty.call(inputs, i)) continue;

            if (inputs[i].type == 'checkbox' || inputs[i].type == 'radio') {
                if (inputs[i].checked) {
                    isReady = true;

                }
                continue;
            }

            if (inputs[i].value != '') {
                isReady = true;

            }

            if (inputs[i].value == '' && inputs[i].required) {
                isReady = false;
                break;
            }

        }

        if (!isReady) {
            this.$qwiz.classList.add('stopped');
        } else {
            this.$qwiz.classList.remove('stopped');
        }

    }

    checkCondition(event) {
        if (event.target.getAttribute('data-condition-target') == null) return;

        const condition = event.target.getAttribute('data-condition-target');


        let isReady = false;
        if (event.target.type == 'checkbox' || event.target.type == 'radio') {
            if (event.target.checked) {
                isReady = true;

            }

        } else if (event.target != '') {
            isReady = true;
        }

        if (isReady) {
            this.$qwiz.classList.add('condition-' + condition);
        } else {
            this.$qwiz.classList.remove('condition-' + condition);
        }

    }
}

export default Qwiz