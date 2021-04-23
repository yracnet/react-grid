
import { useLocalStorage } from 'react-use-storage';

const DEVICES = [
    //{ name: 'TV', icon: 'fa-tv', width: '2500px', height: '100%', verical: true },
    //{ name: 'Desktop', icon: 'fa-windows', width: '100%', height: '100%', verical: true },
    //{ name: 'Table', icon: 'fa-tablet', width: '1920px', height: '1080px', verical: true },
    //{ name: 'Mobile', icon: 'fa-android', width: '640px', height: '1136px', verical: true },

    { name: 'NONE', icon: 'fa-expand', width: '100%', height: '100%', verical: true },
    { name: 'XL', icon: 'fa-tv', width: '2100px', height: '1200px', verical: true },
    { name: 'LG', icon: 'fa-windows', width: '1190px', height: '990px', verical: true },
    { name: 'MD', icon: 'fa-tablet', width: '990px', height: '1080px', verical: true },
    { name: 'SM', icon: 'fa-android', width: '760px', height: '1024px', verical: true },
    { name: 'XS', icon: 'fa-android', width: '400px', height: '800px', verical: true }
]

export const DEFAULT_DEVICE = DEVICES[1]

export const ActionPart = ({ ...props }) => {
    const [device, setDivice] = useLocalStorage('device', DEFAULT_DEVICE);
    const onClickDevice = (it) => {
        if (it.name === device.name) {
            it.verical = !it.verical;
        }
        setDivice(it)
    }
    return (
        <div {...props}>
            <div className="btn-group m-3">
                {
                    DEVICES.map(it => (
                        <button name="tv"
                            onClick={e => onClickDevice(it)}
                            className={'btn ' + (it.name === device.name ? 'btn-danger ' : 'btn-primary')} >
                            <i className={'mr-1 fa ' + it.icon} />
                            {it.name}
                        </button>
                    ))
                }
            </div>
        </div>
    )
}
