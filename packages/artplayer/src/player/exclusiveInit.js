import { def } from '../utils';

export default function exclusiveInit(art, player) {
    const props = ['min', 'pip', 'fullscreen', 'fullscreenWeb', 'fullscreenRotate'];

    props.forEach((name) => {
        const event = `${name}Change`;
        art.on(event, (state) => {
            if (state) {
                props
                    .filter((item) => item !== name)
                    .forEach((item) => {
                        if (player[item]) {
                            player[item] = false;
                        }
                    });
            }
        });
    });

    def(player, 'normal', {
        get() {
            return props.every((name) => !player[name]);
        },
    });
}