import { cn } from '@/libs'
import { forwardRef, HTMLAttributes, memo, useMemo } from 'react'
import boxVariant from './box.variant'
import { commonLayout } from '../commons'

export interface IBoxProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Set the display property of the component
   *
   * Default is `block`
   */
  display?: 'block' | 'inline-block' | 'inline' | 'none'
  /**
   * Set the width for the component
   *
   * Default is `fit`
   */
  width?: 'full' | 'screen' | 'auto' | 'fit' | number
  /**
   * Set the height for the component
   *
   * Default is `fit`
   */
  height?: 'full' | 'screen' | 'auto' | 'fit' | number
  /**
   * Set the padding for the component
   *
   * Default is `2`
   */
  p?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
  /**
   * Set the horizontal padding for the component
   *
   * Default is `0`
   */
  px?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
  /**
   * Set the vertical padding for the component
   *
   * Default is `0`
   */
  py?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
  /**
   * Set the top padding for the component
   *
   * Default is `0`
   */
  pt?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
  /**
   * Set the right padding for the component
   *
   * Default is `0`
   */
  pr?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
  /**
   * Set the bottom padding for the component
   *
   * Default is `0`
   */
  pb?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
  /**
   * Set the left padding for the component
   *
   * Default is `0`
   */
  pl?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
  /**
   * Set the position for the component
   * Default is `relative`
   */
  position?: 'relative' | 'absolute' | 'fixed' | 'sticky' | 'static'
  /**
   * Set the top position for the component
   * Default is `unset`
   */
  top?:
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
  right?:
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
  bottom?:
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
  left?:
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
  flexGrow?: 0 | 1
  /**
   * Set the flex-shrink property for the component
   * Default is `1`
   */
  flexShrink?: 0 | 1
}
const Box = forwardRef<HTMLDivElement, IBoxProps>(
  (
    {
      children,
      className,
      display,
      width = 'fit',
      height = 'fit',
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
      ...props
    },
    ref,
  ) => {
    const generateStyle = useMemo(() => {
      let widthValue: string | number = 'fit'
      let heightValue: string | number = 'fit'
      switch (width) {
        case 'full':
          widthValue = '100%'
          break
        case 'screen':
          widthValue = '100vw'
          break
        case 'auto':
          widthValue = 'auto'
          break
        case 'fit':
          widthValue = 'fit-content'
          break
        default:
          widthValue = `${width}px`
          break
      }
      switch (height) {
        case 'full':
          heightValue = '100%'
          break
        case 'screen':
          heightValue = '100vh'
          break
        case 'auto':
          heightValue = 'auto'
          break
        case 'fit':
          heightValue = 'fit-content'
          break
        default:
          heightValue = `${height}px`
          break
      }
      return {
        width: widthValue,
        height: heightValue,
      }
    }, [width, height])
    return (
      <div
        ref={ref}
        className={cn(
          boxVariant({ display }),
          commonLayout({
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
          className,
        )}
        style={generateStyle}
        {...props}
      >
        {children}
      </div>
    )
  },
)
Box.displayName = 'Box'
export default memo(Box)