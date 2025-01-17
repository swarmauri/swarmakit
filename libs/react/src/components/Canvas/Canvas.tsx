import React, { useRef, useEffect, useState } from 'react';
import './Canvas.css';

interface CanvasProps {
  width: number;
  height: number;
  brushColor: string;
  brushSize: number;
}

const Canvas: React.FC<CanvasProps> = ({ width, height, brushColor, brushSize }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState<boolean>(false);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const context = canvasRef.current.getContext('2d');
      if (context) setCtx(context);
    }
  }, []);

  const startDrawing = ({ nativeEvent }: React.MouseEvent | React.TouchEvent) => {
    if (ctx) {
      const { offsetX, offsetY } = nativeEvent instanceof MouseEvent ? nativeEvent : nativeEvent.touches[0];
      ctx.beginPath();
      ctx.moveTo(offsetX, offsetY);
      ctx.strokeStyle = brushColor;
      ctx.lineWidth = brushSize;
      setIsDrawing(true);
    }
  };

  const draw = ({ nativeEvent }: React.MouseEvent | React.TouchEvent) => {
    if (!isDrawing || !ctx) return;

    const { offsetX, offsetY } = nativeEvent instanceof MouseEvent ? nativeEvent : nativeEvent.touches[0];
    ctx.lineTo(offsetX, offsetY);
    ctx.stroke();
  };

  const endDrawing = () => {
    if (ctx) {
      ctx.closePath();
      setIsDrawing(false);
    }
  };

  const clearCanvas = () => {
    if (ctx && canvasRef.current) {
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    }
  };

  return (
    <div className="canvas-container">
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        className="drawing-canvas"
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={endDrawing}
        onMouseLeave={endDrawing}
        onTouchStart={startDrawing}
        onTouchMove={draw}
        onTouchEnd={endDrawing}
      />
      <button onClick={clearCanvas} className="clear-button" aria-label="Clear Canvas">
        Clear
      </button>
    </div>
  );
};

export default Canvas;