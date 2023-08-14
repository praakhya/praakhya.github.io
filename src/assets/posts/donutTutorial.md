# Donut Tutorial

<aside>
<img src="https://www.notion.so/icons/link_yellow.svg" alt="https://www.notion.so/icons/link_yellow.svg" width="40px" /> **************************************************************Blender Guru’s Donut Tutorial**************************************************************

[https://www.youtube-nocookie.com/embed/videoseries?list=PLjEaoINr3zgFX8ZsChQVQsuDSjEqdWMAD](https://www.youtube-nocookie.com/embed/videoseries?list=PLjEaoINr3zgFX8ZsChQVQsuDSjEqdWMAD)

</aside>

# Object Mode

1. **Add the shape** (torus) after deleting the default cube (`X` for delete).
2. Before adding any new shape make sure to **make any changes** you want to this new torus. For this use the shortcut `F9` to open up the shape pop up.

![Untitled](Untitled.png)

![Untitled](Untitled%201.png)

![Untitled](Untitled%202.png)

To make sure that the software does not crash or get overloaded due to long render times, **keep the resolution** (determined by the major and minor segments) **low**. 

Also to keep shading on the shape uniform, make sure the **faces on the shape are approximately squares**.

1. Use the shortcut `N` to open the properties tab and **change the dimensions to match that of a real donut**.
2. Also, to make sure to avoid any unknown errors, make sure to set the x, y, z **scale to ‘1’** each. This is done by using the `ctrl + A` shortcut for apply, and choosing ‘scale’ to apply scale.

1. Apply **smooth shading** to the shape. This gives an illusion of a smooth surface by treating adjacent faces as one uniform face without increasing the resolution. That is why the silhouette still has the crooked edges. 

1. **************************************Subdivision surface**************************************: Two remove crooked edges add the “Subdivision surface” modifier to the shape.
    
    
    ![Before modifier](Untitled%203.png)
    
    Before modifier
    
    ![After modifier](Untitled%204.png)
    
    After modifier
    
    Keep the values low to avoid burden at render time
    
    ![Untitled](Untitled%205.png)
    

# Edit Mode

1. Now we **modify the mesh** of the shape. Go to “edit mode” to do so.
    
    `G` for **grabbing** a vertex on the mesh.
    
    `click + shift` for **selecting multiple** vertices.
    
    `O` for **proportional editing** (or use icon).
    
    ![Untitled](Untitled%206.png)
    
    ![Untitled](Untitled%207.png)
    
2. Proportional editing is a good work around for selecting multiple vertices and then grabbing. But instead of selecting multiple vertices you just grab one. To check the size of the grab radius scroll up till the circle is visible. (On track pad, first grab then scroll)

1. To **select vertices at random** in edit mode go to select > select random.
    
    
    To change the sharpness of the selection, use the menu item next to the proportional editing toggle.
    
2.  Select the top half of the donut to replicate it to make the icing. To make sure the selection is all the way from the front of the donut to the back, activate X-Ray before selecting. 
3. `shift + D` to duplicate the selection. Or, go to mesh > Duplicate. Then click `P` and select “Selection”. 
4. The icing has no thickness. For that, we add the “Solidify” modifier.
5. However, by default, the thickness produced is towards the inside of the shape. we need to reverse that. To do this change the offset to +1 instead of -1.
6. Now the problem is that the thickness is to much. For that change the thickness property.
7. Because of the current order of application of modifiers, the edge of the icing looks odd. So reverse the order. 

<aside>
<img src="https://www.notion.so/icons/light-bulb_yellow.svg" alt="https://www.notion.so/icons/light-bulb_yellow.svg" width="40px" /> Modifiers are applied from top to bottom!

</aside>

1. We have to add little droplets at the edge of the icing for a realistic effect. However, if in edit mode the vertices are hidden under the solidify modifier. 
2. In the solidify modifier unselect “Edit Mode” option so that it is not visible when in edit mode.
3. Switch on “Proportional edit” and then grab onto vertices to create drops. However, by default these elongations do not wrap onto the surface. Also, the icing can clip through the donut. To avoid this activate snapping.
4. Select the snap tool and choose snap to face and select Project individual elements.
5. To elongate parts of a mesh by creating extra mesh select those vertices and click `E` to extrude.
6. To pinch some portion of mesh, select two extreme vertices and then click `S`.
7. Another way to snap a surface onto another is using Shrink wrap modifier. Make sure this modifier is before anything that sets thickness.

![Untitled](Untitled%208.png)

![Untitled](Untitled%209.png)

![Untitled](Untitled%2010.png)

![Untitled](Untitled%2011.png)

![Untitled](Untitled%2012.png)

![Untitled](Untitled%2013.png)

![Untitled](Untitled%2014.png)

![Before ](Untitled%2015.png)

Before 

![After](Untitled%2016.png)

After

![Untitled](Untitled%2017.png)

![Untitled](Untitled%2018.png)

![Untitled](Untitled%2019.png)

![Untitled](Untitled%2020.png)

![Untitled](Untitled%2021.png)

![Untitled](Untitled%2022.png)

[Screen Recording 2023-08-02 at 2.41.18 PM.mov](Screen_Recording_2023-08-02_at_2.41.18_PM.mov)

# Sculpt Mode

<aside>
<img src="https://www.notion.so/icons/exclamation-mark_yellow.svg" alt="https://www.notion.so/icons/exclamation-mark_yellow.svg" width="40px" /> Apply all modifiers before sculpting

</aside>

Explore the tools in the sculpt workspace. Certain operations can be more convenient when done in Sculpt mode as compared to Edit mode.

# Rendering

Initially the render image is from the perspective of the initial camera position.

![Untitled](Untitled%2023.png)

For adjusting this view, the camera position has to be adjusted. This can be done in the following ways: -

1. Manually adjust the position by dragging around the camera object.
2. Set the camera to see your current view. For this adjust the angle in the view port and then use the shortcut `ctrl + alt + numpad 0` for setting the camera to match this view.
3. Open properties using `N`. Select the “view” tab. Then in “View Lock” under “Lock” select “Camera to View”. Then when you set it to camera mode and then move, the camera remains locked.

Now the lighting has to be set. For this select the light object and then press `alt + G` to lock the light to the centre of the axes. Adjust brightness.

To view the possible rendered result change the view to rendered view.

![Untitled](Untitled%2024.png)

### Render Engines

![Untitled](Untitled%2025.png)

Render engines are responsible for rendering the image. Different engines provide different functionalities.

1. Eevee: This render engine is a real time engine. Instead of computing each ray of light, it estimates the way light interacts with objects using numerous algorithms. It is not meant for absolute physical accuracy. 
    
    It has numerous limitations
    
    [Limitations — Blender Manual](https://docs.blender.org/manual/en/latest/render/eevee/limitations.html)
    
    <aside>
    <img src="https://www.notion.so/icons/help-alternate_yellow.svg" alt="https://www.notion.so/icons/help-alternate_yellow.svg" width="40px" /> ********************************************************Dealing with Shadow problems********************************************************
    When using Eevee engine, since it is realtime, it often makes mistakes when rendering shadows, especially those of hollow objects. To fix this two things have to be set.
    
    1. Increase the cube size of the shadow in the render settings.
    2. Decrease bias of the light shadow in the light setting specially if the object is small.
    
    ![Untitled](Untitled%2026.png)
    
    ![Untitled](Untitled%2027.png)
    
    1. Enable Ambient Occlusion for determining shadows in crevices.
    </aside>
    
2. Cycles: This render engine is a physically-based path tracer for production rendering (ray tracer). It computes each ray of light to be able to produce physically active results.
    
    But due to this computation requirement, it is slower than the Eevee engine.
    
    <aside>
    <img src="https://www.notion.so/icons/exclamation-mark_yellow.svg" alt="https://www.notion.so/icons/exclamation-mark_yellow.svg" width="40px" /> ******************************************************************Render Device Settings for Cycles******************************************************************
    When using the cycles render engine, you may notice that the rendering is even slower than predicted. This might be because, the GPU’s of you system are not actually being utilised. To enable these, go to Preferences > System > Cycles Render Devices.
    
    </aside>
    
    Cycles engine requires a number of samples to render. Depending on the size, fewer samples are sufficient. If even after rendering all samples, there is grain, then enable Denoise.
    
3. Workbench: This engine renders graphics that look exactly like objects in the Solid view setting. This is more for fast rendering during breakdowns, modelling, animation preview etc.

# Shading

## Materials

- **Base colour**: colour of the material
- ******************Roughness******************: Basically the opposite of “Glossy”. It adjusts the shine on the surface.
- ******************************************Subsurface Scattering******************************************: This gives the effect of light passing through the material.
- ************Normal************: This drives the bump on the surface of the object.

## Node Editor

It works from left to right. The node on the left sends its output as an input to the node on the right. 

## Textures

Lets look at the Noise texture which is one of the most commonly used textures besides image texture.

![Untitled](Untitled%2028.png)

![Untitled](Untitled%2029.png)

******Fac******: It is the black and white version of Color.

![Untitled](Untitled%2030.png)

**********Color**********: It gives a grainy texture in rainbow colours.

![Untitled](Untitled%2031.png)

Since the Output colour of the Noise texture is  only either black and white or colour, The ColorRamp node can be used to convert that colour to a colour in a desired range.

![Untitled](Untitled%2032.png)

# Texture Paint

Add an image texture and add it to the base colour of Principle BSDF. Then click on “new” to add a new image texture that can be painted over. The resolution of this new texture depends on how close the object is or how big it is.

Now when you change to the Texture Paint workspace, the new texture is visible in Active Tools.

# Geometry Nodes

It is a control system for parts of an object’s mesh.