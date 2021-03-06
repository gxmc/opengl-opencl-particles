#version 410

in vec3 fragment_world_position;
in vec3 fragment_uv;

uniform mat4 model_matrix;

uniform vec4 camera_world_position;

uniform sampler3D tex;

out vec4 color;

void main()
{
    color = vec4(texture(tex, fragment_uv).xyz, 0.4);
//    color = vec4(1.0);
//    color = vec4(fragment_uv, 0.0, 1.0);
}
