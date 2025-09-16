// src/boot/registerComponents.js
import Injector from 'lib/Injector';
import ColorPaletteField from '../components/ColorPaletteField';


export default () => {
	Injector.component.register('ColorPaletteField', ColorPaletteField);
};