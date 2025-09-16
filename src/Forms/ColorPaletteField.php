<?php

namespace WPP\Public\Forms;

use SilverStripe\Forms\FormField;
use SilverStripe\View\Requirements;

class ColorPaletteField extends FormField
{
        protected $schemaComponent = 'ColorPaletteField';

    public function Type()
    {
        return 'color-palette field';
    }

public function getSchemaDataType()
{
    return 'string'; // or 'Text' if you want
}

    public function Field($properties = [])
    {
        $id = $this->ID();
        $value = $this->getValue();
        $dataJson = htmlspecialchars(json_encode([
            'name' => $this->getName(),
            'value' => $value,
            'palette' => $this->getPalette(),
        ]), ENT_QUOTES, 'UTF-8');

        // Requirements::javascript('resources/wpp-public/akqa-nz-silverstripe-colorpalette/client/dist/colorpalette.bundle.js');

        return sprintf(
            '<div id="%s" class="colorpalette__field" data-props="%s"></div>',
            $id,
            $dataJson
        );
    }

    public function getPalette()
    {
        return [
            '#ff0000',
            '#00ff00',
            '#0000ff',
            '#ffffff',
            '#000000'
        ];
    }
}
