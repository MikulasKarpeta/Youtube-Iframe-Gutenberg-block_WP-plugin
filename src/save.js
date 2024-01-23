/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function   save({ attributes }) {
    let videoLink = "https://www.youtube.com/embed/" + attributes.video;

    return (
      <div {...useBlockProps}>
        <div class="minimalio-youtube" style="position: relative;">
          <div style={"padding-bottom:" + attributes.aspect}>
            <iframe
              style="position: absolute;top: 0;left: 0;width: 100%;height: 100%;"
              src={videoLink}
              allowfullscreen=""
              frameborder="0"
            ></iframe>
          </div>
        </div>
      </div>
    );
  }
