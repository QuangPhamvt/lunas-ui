/* eslint-disable no-magic-numbers, no-shadow, max-lines, id-length, max-statements */
import { forwardRef, HTMLAttributes, memo, useMemo } from 'react'
import { cn } from '@/libs'
import flexVariants from './flexVariant'
import { commonLayout } from '../commons'

interface IFlexProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Is direction of the flex vertical,
   * use `flex-direction: column;` if `true`
   * Default is `false`
   */
  readonly vertical?: boolean
  /**
   * set whether the element is displayed in a single line or in multiple lines
   *
   * Default is `nowrap`
   */
  readonly wrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
  /**
   * Set the width for the component
   *
   * Default is `fit`
   */
  readonly width?: 'full' | 'screen' | 'auto' | 'fit' | number
  /**
   * Set the height for the component
   *
   * Default is `fit`
   */
  readonly height?: 'full' | 'screen' | 'auto' | 'fit' | number
  /**
   * Set the alignment of elements in the direction of the main axis
   * type: `justify-content`
   * Default is `start`
   */
  readonly justify?:
    | 'start'
    | 'end'
    | 'center'
    | 'between'
    | 'around'
    | 'normal'
    | 'stretch'
    | 'evenly'
  /**
   * Set the alignment of elements in the direction of the cross axis
   * type: `align-items`
   * Default is `center`
   */
  readonly align?: 'start' | 'end' | 'center' | 'stretch' | 'baseline'
  /**
   * Set the gap between the elements
   *
   * Default is `2`
   */
  readonly gap?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
  /**
   * Set the horizontal gap between the elements
   *
   * Default is `0`
   */
  readonly gapX?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
  /**
   * Set the vertical gap between the elements
   *
   * Default is `0`
   */
  readonly gapY?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
  /**
   * Set the padding for the component
   *
   * Default is `2`
   */
  readonly p?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
  /**
   * Set the horizontal padding for the component
   *
   * Default is `0`
   */
  readonly px?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
  /**
   * Set the vertical padding for the component
   *
   * Default is `0`
   */
  readonly py?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
  /**
   * Set the top padding for the component
   *
   * Default is `0`
   */
  readonly pt?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
  /**
   * Set the right padding for the component
   *
   * Default is `0`
   */
  readonly pr?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
  /**
   * Set the bottom padding for the component
   *
   * Default is `0`
   */
  readonly pb?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
  /**
   * Set the left padding for the component
   *
   * Default is `0`
   */
  readonly pl?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
  /**
   * Set the position for the component
   * Default is `relative`
   */
  readonly position?: 'relative' | 'absolute' | 'fixed' | 'sticky' | 'static'
  /**
   * Set the top position for the component
   * Default is `unset`
   */
  readonly top?:
    | '0'
    | '1'
    | '2'
    | '3'
    | '4'
    | '5'
    | '6'
    | '7'
    | '8'
    | '9'
    | '-1'
    | '-2'
    | '-3'
    | '-4'
    | '-5'
    | '-6'
    | '-7'
    | '-8'
    | '-9'
  /**
   * Set the right position for the component
   * Default is `unset`
   */
  readonly right?:
    | '0'
    | '1'
    | '2'
    | '3'
    | '4'
    | '5'
    | '6'
    | '7'
    | '8'
    | '9'
    | '-1'
    | '-2'
    | '-3'
    | '-4'
    | '-5'
    | '-6'
    | '-7'
    | '-8'
    | '-9'
  /**
   * Set the bottom position for the component
   * Default is `unset`
   */
  readonly bottom?:
    | '0'
    | '1'
    | '2'
    | '3'
    | '4'
    | '5'
    | '6'
    | '7'
    | '8'
    | '9'
    | '-1'
    | '-2'
    | '-3'
    | '-4'
    | '-5'
    | '-6'
    | '-7'
    | '-8'
    | '-9'
  /**
   * Set the left position for the component
   * Default is `unset`
   */
  readonly left?:
    | '0'
    | '1'
    | '2'
    | '3'
    | '4'
    | '5'
    | '6'
    | '7'
    | '8'
    | '9'
    | '-1'
    | '-2'
    | '-3'
    | '-4'
    | '-5'
    | '-6'
    | '-7'
    | '-8'
    | '-9'
  /**
   * Set the flex-grow property for the component
   * Default is `0`
   */
  readonly flexGrow?: 0 | 1
  /**
   * Set the flex-shrink property for the component
   * Default is `1`
   */
  readonly flexShrink?: 0 | 1
}
const Flex = memo(
  forwardRef<HTMLDivElement, IFlexProps>(
    (
      {
        vertical = false,
        wrap = 'nowrap',
        width = 'fit',
        height = 'fit',
        justify = 'start',
        align = 'center',
        gap = 2,
        gapX,
        gapY,
        p = 2,
        px,
        py,
        pt,
        pr,
        pb,
        pl,
        position,
        top,
        right,
        bottom,
        left,
        flexGrow,
        flexShrink,
        children,
        className,
        ...props
      },
      reference,
    ) => {
      const generateStyle = useMemo(() => {
        let widthValue: string | number = 'fit'
        let heightValue: string | number = 'fit'
        switch (width) {
          case 'full': {
            widthValue = '100%'
            break
          }
          case 'screen': {
            widthValue = '100vw'
            break
          }
          case 'auto': {
            widthValue = 'auto'
            break
          }
          case 'fit': {
            widthValue = 'fit-content'
            break
          }
          default: {
            widthValue = `${width}px`
            break
          }
        }
        switch (height) {
          case 'full': {
            heightValue = '100%'
            break
          }
          case 'screen': {
            heightValue = '100vh'
            break
          }
          case 'auto': {
            heightValue = 'auto'
            break
          }
          case 'fit': {
            heightValue = 'fit-content'
            break
          }
          default: {
            heightValue = `${height}px`
            break
          }
        }
        return {
          width: widthValue,
          height: heightValue,
        }
      }, [width, height])
      return (
        <div
          ref={reference}
          className={cn(
            flexVariants({ wrap, justify, align }),
            commonLayout({
              gap,
              gapX,
              gapY,
              p,
              px,
              py,
              pt,
              pr,
              pb,
              pl,
              position,
              top,
              right,
              bottom,
              left,
              flexGrow,
              flexShrink,
            }),
            {
              'flex-col': vertical,
            },
            className,
          )}
          style={generateStyle}
          {...props}
        >
          {children}
        </div>
      )
    },
  ),
)
Flex.displayName = 'Flex'
export type { IFlexProps }
export default Flex
