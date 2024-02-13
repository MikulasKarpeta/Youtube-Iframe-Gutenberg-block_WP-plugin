/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { View } from "@wordpress/primitives";
const { InspectorControls, useBlockProps } = wp.blockEditor;
const {
  PanelBody,
  __experimentalInputControl,
  PanelRow,
  RadioControl,
} = wp.components;

/**
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function edit({ attributes, setAttributes }) {
  let videoLink = "https://www.youtube.com/embed/" + attributes.video;
  const blockProps = useBlockProps({
    className: "minimalio",
  });
  return (
    <>
      <InspectorControls style={{ marginBottom: "40px" }}>
        <PanelBody title={"Video block options:"}>
          <PanelRow>
            <__experimentalInputControl
              label="Youtube video ID"
              labelPosition="top"
              value={attributes.video}
              type="text"
              onChange={(newVideo) => setAttributes({ video: newVideo })}
            />
          </PanelRow>
          <PanelRow>
            <RadioControl
              label="Video Aspect ratio"
              help="Choose video aspect ratio"
              selected={attributes.aspect}
              options={[
                { label: "16/9", value: "56.25%;" },
                { label: "4/3", value: "75%;" },
                { label: "2.39/1", value: "41.84%;" },
              ]}
              onChange={(value) => setAttributes({ aspect: value })}
            />
          </PanelRow>
        </PanelBody>
      </InspectorControls>
      <View {...blockProps}>
        <div
          class="minimalio-youtube"
          style={{ background: "#232323", padding: "40px 40px" }}
        >
          <iframe
            style={{ width: "100%", height: "300px" }}
            src={videoLink}
            allowfullscreen=""
            frameborder="0"
          ></iframe>
        </div>
      </View>
    </>
  );
}
